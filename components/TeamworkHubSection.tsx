
import { Card } from './ui/card';
import { Badge } from './ui/Badge';
import { Button } from './ui/button';
import { Phetsarath } from "next/font/google";

const PhetsarathFont = Phetsarath({
  subsets: ["lao"],
  weight: "400",
});


export function TeamworkHubSection() {
  return (
    <section className={`py-20 px-6 ${PhetsarathFont.className}`}>
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              ວິໃສທັດນຳໃຊ້ເຕັກໂນໂລຊີທີ່ທັນສະໄໝເຂົ້າໃນການປະຕິບັດງານ.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
             ໃຫ້ທຸກຄົນທີ່ທ່ານເຮັດວຽກນຳ-ທັງພາຍໃນ ແລະນອກບໍລິສັດຂອງທ່ານ-ເປັນວິທີທີ່ມີປະສິດຕິພາບຫຼາຍຂຶ້ນເພື່ອສືບຕໍ່ປະສານກັນ. ຕອບສະໜອງໄວຂຶ້ນດ້ວຍອີໂມຈິ, ສືບຕໍ່ສຸມໃສ່ການສົນທະນາໃນຊ່ອງຕ່າງໆ, ແລະເຮັດໃຫ້ການສື່ສານທັງໝົດຂອງທ່ານງ່າຍຂຶ້ນຢູ່ບ່ອນດຽວ.
            </p>
          </div>
          
          <div className="relative">
            <Card className="p-6 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">ກອງປະຊຸມ</h3>
                  <Badge className="bg-orange-100 text-orange-600">Online</Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg">
                    <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium">Team Standup</div>
                      <div className="text-sm text-gray-500">9:00 AM - 9:30 AM</div>
                    </div>
                    <div className="text-sm text-gray-400">3 min</div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium">Design Review</div>
                      <div className="text-sm text-gray-500">2:00 PM - 3:00 PM</div>
                    </div>
                    <div className="text-sm text-gray-400">45 min</div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium">Sprint Planning</div>
                      <div className="text-sm text-gray-500">4:00 PM - 5:00 PM</div>
                    </div>
                    <div className="text-sm text-gray-400">1 hr</div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-3">ອັບເດດດ່ວນ</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">Website redesign progress: 75%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">API integration completed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">User testing scheduled</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}