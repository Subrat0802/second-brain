import { v2 as cloudinary, UploadApiResponse, UploadApiErrorResponse } from "cloudinary";

export const uploadImageToCloudinary = async (
  file: { tempFilePath: string },
  folder?: string,
  height?: number,
  quality?: number
): Promise<UploadApiResponse | UploadApiErrorResponse> => {
  try {
    const options: {
      folder?: string;
      height?: number;
      quality?: number;
      resource_type: "auto";
    } = {
      resource_type: "auto",
    };

    if (folder) options.folder = folder;
    if (height) options.height = height;
    if (quality) options.quality = quality;

    return await cloudinary.uploader.upload(file.tempFilePath, options);
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw error;
  }
};
