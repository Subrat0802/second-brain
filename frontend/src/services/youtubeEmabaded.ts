export const getYoutubeEmbedUrl = (url: string) => {
  try {
    const urlObj = new URL(url);
    const videoId = urlObj.searchParams.get("v");
    const startTime = urlObj.searchParams.get("t");

    let embedUrl = `https://www.youtube.com/embed/${videoId}`;
    if (startTime) {
      // remove the trailing 's' if present
      const seconds = startTime.replace("s", "");
      embedUrl += `?start=${seconds}`;
    }
    return embedUrl;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err: unknown) {
    console.error("Invalid YouTube URL:", url);
    return url;
  }
};
