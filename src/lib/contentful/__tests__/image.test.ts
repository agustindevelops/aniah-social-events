import { contentfulImageUrl } from "@/lib/contentful/image";

const asset = "//images.ctfassets.net/space/id/hash/photo.jpg";

describe("contentfulImageUrl", () => {
  it("points protocol-relative asset URLs at the Contentful image API", () => {
    const result = new URL(
      contentfulImageUrl(asset, { height: 600, quality: 70 })
    );

    expect(result.protocol).toBe("https:");
    expect(result.hostname).toBe("images.ctfassets.net");
    expect(result.pathname).toBe("/space/id/hash/photo.jpg");
    expect(result.searchParams.get("h")).toBe("600");
    expect(result.searchParams.get("q")).toBe("70");
    expect(result.searchParams.get("fm")).toBe("webp");
    expect(result.searchParams.has("w")).toBe(false);
  });

  it("crops to a frame when width and height are both set", () => {
    const result = new URL(
      contentfulImageUrl(`https:${asset}`, {
        width: 640,
        height: 840,
        fit: "fill",
        focus: "faces",
      })
    );

    expect(result.searchParams.get("w")).toBe("640");
    expect(result.searchParams.get("h")).toBe("840");
    expect(result.searchParams.get("fit")).toBe("fill");
    expect(result.searchParams.get("f")).toBe("faces");
    expect(result.searchParams.get("q")).toBe("75");
  });

  it("leaves video hosts alone", () => {
    const video = "https://videos.ctfassets.net/space/id/hash/clip.mp4";

    expect(contentfulImageUrl(video, { width: 640 })).toBe(video);
  });
});
