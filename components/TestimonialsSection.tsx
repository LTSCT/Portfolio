import { Card } from './ui/card';
import { Phetsarath } from "next/font/google";

const PhetsarathFont = Phetsarath({
  subsets: ["lao"],
  weight: "400",
});

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "ຂ້ອຍມັກທີມງານທີ່ມີການຈັດຕັ້ງແລະງ່າຍຕໍ່ການນໍາໃຊ້. ພວກເຮົາສາມາດຕິດຕາມໂຄງການທັງຫມົດຂອງພວກເຮົາແລະຕິດຕໍ່ສື່ສານຢ່າງບໍ່ຢຸດຢັ້ງ.",
      author: "Facebook",
      role: "T`ley chalernsouk",
      rating: 5
    },
    {
      text: "ທີມງານໄດ້ຫັນປ່ຽນວິທີທີ່ທີມງານຫ່າງໄກສອກຫຼີກຂອງພວກເຮົາຮ່ວມມື. ການໂຕ້ຕອບແມ່ນ intuitive ແລະຄຸນສົມບັດພຽງແຕ່ເຮັດວຽກ.",
      author: "Tiktok",
      role: "Tleycls", 
      rating: 5
    },
    {
      text: "ສຸດທ້າຍ, ເຄື່ອງມືຮ່ວມມືທີ່ບໍ່ໄດ້ຢູ່ໃນເສັ້ນທາງ. ທີມງານຊ່ວຍໃຫ້ພວກເຮົາສຸມໃສ່ແລະຜະລິດຕະພັນ.",
      author: "YouTube",
      role: "T`ley",
      rating: 5
    },
    {
      text: "ລັກສະນະການກໍານົດເວລາແມ່ນເກມທີ່ມີການປ່ຽນແປງ. ບໍ່ມີອີເມລ໌ທີ່ພະຍາຍາມຊອກຫາເວລາປະຊຸມ.",
      author: "Web",
      role: "Engineering Manager",
      rating: 5
    }
  ];

  return (
    <section className={`py-20 px-6 ${PhetsarathFont.className}`}>
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
          ຂ່າວສານ
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-orange-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}