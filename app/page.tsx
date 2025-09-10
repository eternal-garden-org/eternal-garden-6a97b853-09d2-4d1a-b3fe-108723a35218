import { PageLayout } from "@/components/page-layout";
import { Container } from "@/components/container";
import { MemorialHeader } from "@/components/memorial-header";
import { MemorialInfo } from "@/components/memorial-info";
import { MemorialBio } from "@/components/memorial-bio";
import { MemorialPhotos } from "@/components/memorial-photos";
import { MemorialQuotes } from "@/components/memorial-quotes";
import { MemorialMedia } from "@/components/memorial-media";
import { MemorialWords } from "@/components/memorial-words";
import { MemorialContacts } from "@/components/memorial-contacts";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <PageLayout>
      <MemorialHeader
        fullName="Александр Викторович Карпук"
        birthDate="1965-06-13"
        deathDate="2025-08-13"
        photoUrl="http://127.0.0.1:54331/storage/v1/object/public/memorial-media/memorials/6a97b853-09d2-4d1a-b3fe-108723a35218/photo/1757474612890_main_image_3.png"
        birthPlace="Солигорск, Беларусь"
        deathPlace="Брест, Беларусь"
      />
      <Container>
        <MemorialInfo />
        <MemorialBio />
        <MemorialPhotos />
      </Container>
      <MemorialQuotes />
      <Container>
        <MemorialMedia />
        <MemorialWords />
        <MemorialContacts />
      </Container>
      <Footer />
    </PageLayout>
  );
}