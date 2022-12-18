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

const placeholder = createKeys(["REGISTER_LINK"] as const);

function createKeys<T extends readonly string[]>(keys: T) {
  return new Proxy(
    {},
    {
      get(_, key) {
        return `{{${String(key)}}}`;
      },
    }
  ) as { [key in T[number]]: string };
}

export default function Email() {
  return (
    <Html lang="ko">
      <Head />
      <Preview>SOPT 회원가입</Preview>
      <Section style={main}>
        <Container style={container}>
          <Section style={{ marginTop: "32px" }}>
            <Img
              src="https://playground.sopt.org/icons/logo/time=30.svg"
              width="160"
              height="50"
              alt="Vercel"
              style={logo}
            />
          </Section>
          <Text style={h1}>SOPT 회원인증 완료</Text>
          <Text style={contentText}>
            SOPT 회원 인증을 위한 메일입니다.
            <br />
            아래의 버튼을 눌러 회원가입 절차를 계속 진행해주세요.
          </Text>
          <Section>
            <Button style={btn} href={placeholder.REGISTER_LINK}>
              회원가입 계속하기
            </Button>
          </Section>
          <Text style={text}>
            <br />
            또는 다음 링크를 복사해 주소창에 붙여 넣으세요:
            <br />
            <Link
              href={placeholder.REGISTER_LINK}
              target="_blank"
              style={link}
              rel="noreferrer"
            >
              {placeholder.REGISTER_LINK}
            </Link>
          </Text>
        </Container>
      </Section>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
};

const container = {
  border: "1px solid #eaeaea",
  borderRadius: "5px",
  margin: "40px auto",
  padding: "20px",
  width: "465px",
};

const logo = {
  margin: "0 auto 20px auto",
};

const h1 = {
  color: "#000",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "32px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "30px 0",
  padding: "0",
};

const link = {
  color: "#067df7",
  textDecoration: "none",
  fontSize: "14px",
};

const text = {
  color: "#000",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  lineHeight: "24px",
};

const contentText = {
  color: "#000",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "center" as const,
  paddingBottom: "40px",
};

const btn = {
  backgroundColor: "#8040ff",
  borderRadius: "6px",
  color: "#fff",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "48px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block" as const,
  width: "100%",
  padding: "16px 0",
};

const hr = {
  border: "none",
  borderTop: "1px solid #eaeaea",
  margin: "26px 0",
  width: "100%",
};
