import { Button } from './ui/button';
import { Input } from './ui/input';
import { Phetsarath } from "next/font/google";

const PhetsarathFont = Phetsarath({
  subsets: ["lao"],
  weight: "400",
});

export function Footer() {
  return (
    <footer className={` py-16 px-6 ${PhetsarathFont.className}`}>
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Company */}
          <div className="space-y-4">
            <div className="text-lg font-semibold text-orange-400">ທີມງານ</div>
            <p className="text-gray-400 text-sm leading-relaxed">
             T'LEYCLS. All-in-one 
            </p>
          </div>

          {/* Help */}
          <div className="space-y-4">
            <h4 className="font-semibold">ຊ່ວຍເຫຼືອ</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors">About us</a></li>
              <li><a href="/education" className="hover:text-white transition-colors">Philosophy</a></li>
              <li><a href="/works" className="hover:text-white transition-colors">Workexpericene</a></li>
            </ul>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h4 className="font-semibold">ຄຸນສົມບັດ</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Screen Sharing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">iOS & Android Apps</a></li>
              <li><a href="#" className="hover:text-white transition-colors">File Sharing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">User Management</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h4 className="font-semibold">ຕິດຕໍ່ພວກເຮົາ</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Ley.chalernsouk@gmail.com</li>
              <li>+856 (020) 95161956 </li>
              <li>ໄຊທານີ</li>
              <li>ນະຄອນຫຼວງວຽງຈັນ</li>
            </ul>
          </div>

        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold">STAY UPDATED</h4>
              <p className="text-sm text-gray-400">Subscribe to our newsletter</p>
            </div>
            <div className="flex gap-4 max-w-sm w-full">
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 bg-white/10 border-white/20 placeholder:text-gray-400"
              />
              <Button className="bg-orange-500 hover:bg-orange-600">
                Subscribe
              </Button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-sm text-gray-400">
              © 2025 T'LEYCLS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}