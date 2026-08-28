import type { Metadata } from "next";

import { Container, PageIntro } from "@/components/layout";
import { ProjectList } from "@/components/project-list";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work by Ana Miric. The list grows as pieces are ready to share.",
};

export default function WorkPage() {
  const projects = getProjects();

  return (
    <Container className="pt-16 pb-24 sm:pt-20">
      <PageIntro kicker="Index" title="Selected work">
        A list that grows as pieces are ready to share. Nothing invented,
        nothing listed early.
      </PageIntro>
      <ProjectList projects={projects} />
    </Container>
  );
}
