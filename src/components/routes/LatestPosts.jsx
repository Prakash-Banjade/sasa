import React from "react";
import HeroSectionTemplate from "../HeroSection_template";


const LatestPosts = () => {
  const postContainerStyle = {
    maxWidth: "600px",
    margin: "2rem auto",
  };

  const heroSectionContent = {
    title: "Our Latest Posts",
    description: `We are actively posting about our services and facilities on
    Facebook. Posting about our services on Facebook is an effective way
    for us to reach a wide audience and engage more customers. It helps
    to build brand awareness and trust, increase website traffic, and
    boost sales. By sharing useful and informative content, we can
    demonstrate our expertise and show potential customers why they
    should choose our services. Additionally, we can use Facebook Ads to
    target specific audiences, allowing us to reach even more people
    with our message.`,
  };
  return (
    <>
      <HeroSectionTemplate
        title={heroSectionContent.title}
        description={heroSectionContent.description}
      />

      <div
        className="latestPosts-container container dflex-center dflex-column gap-2"
        style={postContainerStyle}
      >
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02RsjxP52KnHNmbATJdEYiUX2LWqpsybkhWbSMpnnVcevsRWY5KV79WQ1dYiWriRscl%26id%3D100087576614717&show_text=false&width=500"
          width="500"
          height="419"
          style={{ border: "none", overflow: "hidden", width: "100%" }}
          scrolling="no"
          frameBorder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02KJVLSntCgYMLRAjSE1ZPKKxQmFCRQEskBCvQGtaqZ12PyUxSo2xefYiU5Lcs3keFl%26id%3D100087576614717&show_text=false&width=500"
          width="500"
          height="250"
          style={{ border: "none", overflow: "hidden", width: "100%" }}
          scrolling="no"
          frameBorder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0mmYiciLXGzNmibNUJnmf25iVs1rTkEGTPmYXa6NaoD7d2WK34nVRzFsfnb73ue42l%26id%3D100087576614717&show_text=false&width=500"
          width="500"
          height="498"
          style={{ border: "none", overflow: "hidden", width: "100%" }}
          scrolling="no"
          frameBorder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0ARnNkqiYi61zWpZ14oiAYht3zRXo9mUSaM6CG5tm8n4pTS3smSyR8XCpD7pgzQmsl%26id%3D100087576614717&show_text=false&width=500"
          width="500"
          height="419"
          style={{ border: "none", overflow: "hidden", width: "100%" }}
          scrolling="no"
          frameBorder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=469&href=https%3A%2F%2Fwww.facebook.com%2F100087576614717%2Fvideos%2F3321888788093253%2F&show_text=false&width=560&t=0"
          width="560"
          height="469"
          style={{ border: "none", overflow: "hidden", width: "100%" }}
          scrolling="no"
          title="Latest FB post - Driving License"
          frameBorder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02QfioUDvxnwmS159hgjw9r5HTZzpLGPMgHHqNKAxdMMze3K46JGEQzTB4moKJBj4Fl%26id%3D100087576614717&show_text=true&width=500"
          title="Latest FB post - Tuition Classes"
          height="632"
          style={{ border: "none", overflow: "hidden", width: "100%" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>

        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0N9P3ysV8D9pDhnSPS5mLQYkRp3TSyotXge8oc5DJBGc5YvZXTc7kX2tbTyXRtoznl%26id%3D100087576614717&show_text=true&width=500"
          height="539"
          style={{ border: "none", overflow: "hidden", width: "100%" }}
          title="Latest FB post - Welcome Post"
          scrolling="no"
          frameBorder="0"
          allowFullScreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>

      <div className="joinFb">
        <h3 className="text-center" style={{ fontWeight: 500 }}>
          Interested in more, Join our Facebook page{" "}
          <a
            href="https://www.facebook.com/profile.php?id=100087576614717"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "underline",
              color: "var(--primary-color)",
            }}
          >
            here!
          </a>
        </h3>
      </div>
    </>
  );
};

export default LatestPosts;
