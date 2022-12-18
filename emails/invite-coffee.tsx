import { Button } from "@react-email/button";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Hr } from "@react-email/hr";
import { Html } from "@react-email/html";
import { Img } from "@react-email/img";
import { Link } from "@react-email/link";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import * as React from "react";

const placeholder = createKeys(
  [
    "SENDER",
    "TOPIC",
    "CONTENT",
    "EMAIL",
    "PROFILE_PICTURE_URL",
    "PROFILE_URL",
  ] as const,
  {
    SENDER: "박건영",
    TOPIC: "커피챗",
    CONTENT: "커피챗 신청 내용내용",
    EMAIL: "tekiter8@gmail.com",
    PROFILE_PICTURE_URL:
      "https://playground.sopt.org/icons/icon-member-default.svg",
    PROFILE_URL: "https://playground.sopt.org/members?id=2",
  },
  false
);

function createKeys<T extends readonly string[]>(
  keys: T,
  example?: { [key in T[number]]: string },
  useExample = false
) {
  return new Proxy(
    {},
    {
      get(_, key) {
        if (example && useExample) {
          return example[key as T[number]];
        }
        return `{{${String(key)}}}`;
      },
    }
  ) as { [key in T[number]]: string };
}

export default function Email() {
  return (
    <Html lang="ko">
      <Head />
      <Preview>
        {placeholder.SENDER}님이 {placeholder.TOPIC} 주제로 쪽지를 보냈어요.
      </Preview>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>
            {placeholder.SENDER}님이 {placeholder.TOPIC} 주제로 쪽지를 보냈어요.
          </Text>
          <Section style={{ textAlign: "center", padding: "30px 0" }}>
            <div style={userImageBox}>
              <Img
                src={placeholder.PROFILE_PICTURE_URL}
                width="96"
                height="96"
                alt=""
                style={userImage}
              />
            </div>
            <Text style={userName}>{placeholder.SENDER}</Text>
            <Button
              pY={10}
              pX={20}
              style={button}
              href={placeholder.PROFILE_URL}
            >
              프로필 보기
            </Button>
          </Section>
          <Text style={review}>{placeholder.CONTENT}</Text>
          <br />
          <Text style={paragraph}>
            이 쪽지에 대한 답변은{" "}
            <Link href={`mailto:${placeholder.EMAIL}`}>
              {placeholder.EMAIL}
            </Link>
            로 보내주세요.
          </Text>
          <Hr />
          <Section>
            <Img
              src="https://playground.sopt.org/icons/logo/time%3D30.svg"
              width="90"
              height="30"
              alt="SOPT"
              style={{ margin: "20px auto 0 auto" }}
            />
          </Section>
        </Container>
      </Section>
    </Html>
  );
}

const fontFamily =
  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const userImageBox = {
  margin: "0 auto",
  marginBottom: "16px",
  width: "96px",
  height: "96px",
  clipPath: "circle(50% at 50% 50%)",
  position: "relative",
};

const userImage = {
  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const userName = {
  fontSize: "20px",
};

const heading = {
  fontFamily,
  fontSize: "30px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontFamily,
  fontSize: "18px",
  lineHeight: "1.2",
  color: "#484848",
};

const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const button = {
  fontFamily,
  backgroundColor: "#8040ff",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "14px",
  textDecoration: "none",
  textAlign: "center" as const,
};
