import { Box } from "@/shared/components/containers/Box/Box";
import { Button } from "@/shared/components/ui/Button/Button";
import { ButtonLink } from "@/shared/components/ui/Button/ButtonLink";
import { Title } from "@/shared/components/ui/Title/Title";

export const HomePage = () => {
  return (
    <Box>
      <Title>Кнопки</Title>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Button variant="primary" size="small">
          primary small
        </Button>
        <Button variant="primary"> primary normal</Button>
        <Button variant="primary" size="large">
          primary large
        </Button>

        <Button variant="secondary" size="small">
          secondary small
        </Button>
        <Button variant="secondary"> secondary normal</Button>
        <Button variant="secondary" size="large">
          secondary large
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <ButtonLink href={"/"} variant="primary" size="small">
          link primary small
        </ButtonLink>
        <ButtonLink href={"/"} variant="primary">
          link primary normal
        </ButtonLink>
        <ButtonLink href={"/"} variant="primary" size="large">
          link primary large
        </ButtonLink>

        <ButtonLink
          href={"/"}
          isPublicLink
          target="_blank"
          variant="secondary"
          size="small"
        >
          link secondary small
        </ButtonLink>
        <ButtonLink href={"/"} isPublicLink target="_blank" variant="secondary">
          link secondary normal
        </ButtonLink>
        <ButtonLink
          href={"/"}
          isPublicLink
          target="_blank"
          variant="secondary"
          size="large"
        >
          link secondary large
        </ButtonLink>
      </div>
    </Box>
  );
};
