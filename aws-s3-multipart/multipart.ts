import {
  S3Client,
  CreateMultipartUploadCommand,
  UploadPartCommand,
  CompleteMultipartUploadCommand,
  AbortMultipartUploadCommand,
} from "@aws-sdk/client-s3";

import * as fs from "node:fs";
import * as path from "node:path";

const s3 = new S3Client({ region: "ap-south-1" });

async function multipartUpload(bucket: string, key: string, filePath: string) {
  const fileSize = fs.statSync(filePath).size;
  const partSize = 5 * 1024 * 1024; // 5MB minimum
  const fileStream = fs.createReadStream(filePath, { highWaterMark: partSize });

  // 1️⃣ Start multipart upload
  const createRes = await s3.send(
    new CreateMultipartUploadCommand({
      Bucket: bucket,
      Key: key,
    })
  );

  const uploadId = createRes.UploadId;
  console.log("Upload started. UploadId:", uploadId);

  const parts: any[] = [];
  let partNumber = 1;

  try {
    // 2️⃣ Read the file in chunks and upload each part
    for await (const chunk of fileStream) {
      console.log(`Uploading part ${partNumber}...`);

      const uploadPartRes = await s3.send(
        new UploadPartCommand({
          Bucket: bucket,
          Key: key,
          UploadId: uploadId,
          PartNumber: partNumber,
          Body: chunk,
        })
      );

      parts.push({
        ETag: uploadPartRes.ETag,
        PartNumber: partNumber,
      });

      partNumber++;
    }

    // 3️⃣ Complete the multipart upload
    const completeRes = await s3.send(
      new CompleteMultipartUploadCommand({
        Bucket: bucket,
        Key: key,
        UploadId: uploadId,
        MultipartUpload: { Parts: parts },
      })
    );

    console.log("Upload completed:", completeRes.Location);
    return completeRes.Location;
  } catch (err) {
    console.error("Error occurred. Aborting upload.", err);

    // 4️⃣ Abort multipart upload if any part fails
    await s3.send(
      new AbortMultipartUploadCommand({
        Bucket: bucket,
        Key: key,
        UploadId: uploadId,
      })
    );
  }
}

// Run the upload
(async () => {
  const file = path.join(__dirname, "bigfile.bin"); // replace with real file
  await multipartUpload("my-bucket", "uploads/bigfile.bin", file);
})();
