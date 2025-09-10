import { Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";

interface MemorialContactsProps {
  className?: string;
}

// Данные для контактов
const contactsData = [
  {
    id: "1",
    name: "Ольга Сергеевна",
    relation: "Жена",
    phone: "+375 (29) 123-45-67",
    email: "olga.karpuk@mail.by",
  },
  {
    id: "2",
    name: "Елена Карпук",
    relation: "Дочь",
    phone: "+375 (29) 987-65-43",
  },
];

export function MemorialContacts({ className }: MemorialContactsProps) {
  return (
    <div className={cn("w-full py-16", className)}>
      <div className="text-center mb-10">
        <Typography.H2 className="text-white text-[40px] font-bold">
          Контакты
        </Typography.H2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {contactsData.map((contact) => (
          <div
            key={contact.id}
            className="rounded-lg p-6 shadow-md"
            style={{
              backgroundColor: '#2D2D2D',
              backgroundImage: `url("http://127.0.0.1:54331/storage/v1/object/public/memorial-media/memorials/6a97b853-09d2-4d1a-b3fe-108723a35218/photo/1757474699336_bg_card_pattern_3.png")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: '0.8'
            }}
          >
            <div className="space-y-1 text-left">
              <Typography.P className="text-[#8B8B8B] text-[12px]" style={{ margin: 0 }}>
                {contact.relation}
              </Typography.P>
              <Typography.H3 className="text-white text-[16px] font-bold" style={{ marginBottom: '16px' }}>
                {contact.name}
              </Typography.H3>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#8B8B8B]" />
                  <a
                    href={`tel:${contact.phone.replace(/\D/g, "")}`}
                    className="text-white text-[16px] hover:text-[#F6B95A] transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>

                {contact.email && (
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#8B8B8B]" />
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-white text-[16px] hover:text-[#F6B95A] transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}