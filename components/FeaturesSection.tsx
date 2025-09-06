
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Phetsarath } from "next/font/google";

const PhetsarathFont = Phetsarath({
  subsets: ["lao"],
  weight: "400",
});

export function FeaturesSection() {
  return (
    <section className= {`py-20 px-6 ${PhetsarathFont.className}`}>
      <div className="container mx-auto max-w-7xl space-y-20">
        
        {/* Simple task management */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <img
              src="/mz.png"
              alt="Business person working"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="lg:order-1 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              ມະຫາວິທະຍາໄລແຫ່ງຊາດ
            </h2>
            <h4>
              ສິງຫາ.2017 - ມິຖຸນາ.2022
            </h4>
            <p className="text-lg text-gray-600 leading-relaxed">
             "ມະຫາວິທະຍາໄລແຫ່ງຊາດ ເມືອງ ສີສັດຕະນາກ ນະຄອນຫຼວງວຽງຈັນ ສາຂາວິຊາ ກົດໝາຍອາຍາ, ຄະນະ ນິຕິສາດ ແລະ ລັດຖະສາດ. ມີຄວາມຮູ້ ແລະ ຄວາມສາມາດໃນການວິເຄາະການກະທຳຜິດ ແລະ ໂທດທາງອາຍາ, ມີທັກສະທີ່ຈຳເປັນໃນການດໍາເນີນຄະດີອາຍາເຊັ່ນ: ການເອົາຄໍາໃຫ້ການ (ໂຈດ ແລະ ຈໍາເລີຍ), ສ້າງບົດບັນທຶກ, ຂຽນຄໍາຖະແຫຼງສັ່ງຟ້ອງຜູ້ກະທໍາຜິດຂຶ້ນສານ ແລະ ແຕ່ງຄໍາຕັດສິນຂອງສານເປັນຕົ້ນ. ນອກຈາກນັ້ນ ຍັງໄດ້ຝຶກຝົນທັກສະໃນການສື່ສານ ແລະ ການວິເຄາະລາຍລະອຽດ.",
            </p>
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
              ອ່ານເພີ່ມ
            </Button>
          </div>
        </div>

        {/* Scheduling that actually works */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              ຝຶກແອບວິຊາທາງການທະຫານ
              
            </h2>
            <h4>
              ທັນວາ.2024 - ມິຖຸນາ.2025

            </h4>
            <p className="text-lg text-gray-600 leading-relaxed">
              "ໄດ້ຮັບການຝຶກແອບຮ່ຳຮຽນການເມືອງ ແລະ ການທະຫານ; ຝຶກຝົນຫຼໍ່ຫຼອມຕົນເອງ, ຮ່ຳຮຽນການເມືອງ, ການທະຫານ, ວັດທະນະທຳ.ຄວາມສະຫລຽວສະ ຫລາດ, ສາມາດປະດິດສ້າງໃນການສູ້ຮົບ ແລະ ເຮັດວຽກທີ່ໄດ້ຮັບການ ທົດສອບຈາກພຶດຕິກຳແຫ່ງການຕໍ່ສູ້ປະຕິວັດອັນຍາວນານ",
            </p>
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
              ອ່ານເພີ່ມ
            </Button>
          </div>
          <div>
           <img
              src="/am.jpg"
              alt="Business person working"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>


         {/* Scheduling that actually works */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              ໂຮງຮຽນ ມ.ສ ສະໜາມໄຊ ແຂວງ ອັດຕະປຶ
              <br />
              
            </h2>
            <h4>
              ກັນຍາ,2006.-ມິຖຸນາ,2017
            </h4>
            <p className="text-lg text-gray-600 leading-relaxed">
              "ຂັ້ນມັດທະຍົມສຶກສາວິຊາພາກບັງຄັບ ແລະ ວິຊາພາກເສີມວິຊາຊີບ ລະບົບໄຟຟ້າ.ມີຄວາມຮູ້ ແລະ ຄວາມສາມາດໃນການວິເຄາະ, ມີທັກສະທີ່ຈຳເປັນໃນການກ້າວໄປຂັ້ນມະຫາໄລ.",
            </p>
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
              ອ່ານເພີ່ມ
            </Button>
          </div>
          <div>
            <img
              src="/ms.png"
              alt="Business person working"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
}