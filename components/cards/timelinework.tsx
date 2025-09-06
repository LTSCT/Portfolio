import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Phetsarath } from "next/font/google";

const PhetsarathFont = Phetsarath({
  subsets: ["lao"],
  weight: "400",
});


export function TimelineDemo() {
  const data = [
    {
      
      title: " ກອງທັບປະຊາຊົນລາວ 2024-2025",
      content: (
        <div className={`${PhetsarathFont.className}`}>
          <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            ເຄືອນໄຫວວຽກງານທາງການທະຫານ ແລະ ຍັງປະຕິບັດການສຶກສາຮໍ່າຮຽນ
          </p>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ ຮຽນຮູ້ຄວາມເປັນມາຂອງກອງທັບ, ການເມືອງ,ການທະຫານ ແລະ ການແພດກອງທັບ.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ ຮຽນຮູ້ 7 ລະບອບ 18 ວຽກ ຄຳປະຕິຍານ 8 ຂໍ້ 12 ຂໍ້ຕໍ່ປະຊາຊົນ.  
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ ສຳເລັດໃນການສຶກສາ ແລະ ປະຕິບັດຕົວຈິງ.
            </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/army1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/army2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="army3.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="army4.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
     {

      title: " ບໍລິສັດ ໂຊກໄຊ ກຸ່ມ - Lotteria 2023-2024",
      content: (
        <div className={`${PhetsarathFont.className}`}>
          <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            ເຂົ້າເຮັດວຽກເຄືອນໄຫວວຽກງານ ເປັນພະນັກງານເອກະຊົນ
          </p>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ ຮຽນຮູ້ຄວາມຮັບຜິດຊອບຕໍ່ໜ້າວຽກ,ຄວາມສາມັກຄີລະຫວ່າງບຸກຄົນຕໍ່ບຸກຄົນ,ບຸກົນຕໍ່ອົງກອນ
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ ໄດ້ນຳໃຊ້ຄວາມຮູ້,ຄວາມສາມາດເຂົ້າໃນການເຮັດວຽກງານປະຕິບັດຈົນສຳເລັດໜ້າວຽກ.
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ ໄດ້ຄວາມຮູ້,ນຳການເຮັດວຽກງານໃຫ້ທາງບໍລິສັດ ເອກະຊົນ ເຊັ່ນ: ເຮັດລາຍງານປະອາທິດ,ລາຍງານໜ້າວຽກອາທິດຕໍ່ໄປ,ຂື້ນແຜນສັ່ງຊື້,ສະຫຼຸບ ສາມາຊິກສົ່ງໃຫ້​​ HR, ສ້າງ Excell ບັນທຶກຂໍ້ມູນການຂາຍ
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/lott1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/lott2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/lott3.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/lott4.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    }, 
    {
      title: " ບໍລິສັດ ສະກາວິ-ລາວ 2022-2023",
      content: (
        <div className={`${PhetsarathFont.className}`}>
          <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            ເຂົ້າເຮັດວຽກເຄືອນໄຫວວຽກງານ ເປັນພະນັກງານເອກະຊົນ
          </p>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                ✅ ຮຽນຮູ້ຄວາມຮັບຜິດຊອບຕໍ່ໜ້າວຽກ,ຄວາມສາມັກຄີລະຫວ່າງບຸກຄົນຕໍ່ບຸກຄົນ,ບຸກົນຕໍ່ອົງກອນ
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                ✅ ເປັນພະງານເຄືອນໄຫວຢູ່ ພະແນກອອກແບບພີມກາ ນຳໃຊ້ປະສົບການສວນຕົວ.
              </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/sca2.jpg"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="/sca1.jpg"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </div>
        </div>
      ),
    },
    {
      title: " ກຸ່ມ ພັດທະນາຊຸ່ມຊົນ ຄນລ 2018 - 2022",
      content: (
        <div className={`${PhetsarathFont.className}`}>
          <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            ເຄືອນໄຫວວຽກງານ ອາສາສະໝັກ ແລະ ຍັງປະຕິບັດການສຶກສາຮໍ່າຮຽນ
          </p>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ ຮຽນຮູ້ຄວາມຮັບຜິດຊອບຕໍ່ໜ້າວຽກ,ຄວາມສາມັກຄີລະຫວ່າງບຸກຄົນຕໍ່ບຸກຄົນ,ບຸກົນຕໍ່ອົງກອນ
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ ໃນການເປັນຜູ້ຊ່ວຍບໍລິຫານ ເປັນຫົວໜ້າ ຝ່າຍອຸປະກອນ 3 ປີ ແຜ່ນການເຄື່ອນໄຫວວຽກງານລົງສະຖານທີ່,ຄິດໄລ່ອຸປະກອນ,ສົ່ງເສີມຝ່າຍກິດຈະກຳ,ລົງຊ່ວຍເຫືອ ໂຮງຮຽນ ແຂວງ ວຽງຈັນ, ແຂວງ ຄໍາມ່ວນ.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ ສິ່ງທີ່ໃດ້ໃນການເປັນສ່ວນໜຶ່ງໃນການພັດທະນາ, 
            </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/cdg3.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/cdg2.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/cdg1.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/cdg4.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: " ອົງການ ໄອຍະການປະຊາຊົນ ເຂດ III 2021-2022",
      content: (
        <div className={`${PhetsarathFont.className}`}>
          <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            ປະສົບການໃນການຝຶກງານ ທາງດ້ານໄອຍະການ 3 ເດືອນ.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ ຮຽນຮູ້ຄວາມຮັບຜິດຊອບຕໍ່ໜ້າວຽກ,ຄວາມສາມັກຄີລະຫວ່າງບຸກຄົນຕໍ່ບຸກຄົນ,ບຸກົນຕໍ່ອົງກອນ
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ ຂຽນບົດສະຫຼຸບ,ຄຳຮ້ອງຝ້ອງ,ຕີລາຄາສຳນວນຄະດີ,ສົ່ງສຳນວນຄຳຮ້ອງຂື້ນສານຕັດສິນຄະດີ,ໄດ້ໄປຄ້າຍຄຸມຂັງ,ໄດ້ເຂົ້າຮ່ວມພິຈາລະນາຕັດສິນຢູ່ສານ ໄດ້ຂຽນສະໂນດນໍາສົ່ງ, 
                  ຂຽນຄໍາສັງຟ້ອງຜູ້ຖືກຫາຂື້ນສານ, ແລະ ອື່ນໆອີຫຫຼາຍຢ່າງ.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ ຄວາມຮູ້ທີ່ໄດ້ຈາກການລົງຝຶກງານ ສາມາດຕໍ່ຍອດໄປອະນາຄົດຝ່າຍໜ້າໄດ້
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/ak2.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/ak3.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className={`relative w-full overflow-clip${PhetsarathFont.className}`}>
      <Timeline data={data} />
    </div>
  );
}
