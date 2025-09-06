
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Input } from './ui/input';


export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-sm uppercase tracking-wider text-orange-400">
                Teams
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Instant collaboration
                <br />
                for remote teams
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                All-in-one place for your remote team to chat, collaborate and track project progress.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Input 
                type="email" 
                placeholder="Email" 
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                CONTACT
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1617035969161-f6d66f95445e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGxhcHRvcCUyMHJlbW90ZSUyMHdvcmt8ZW58MXx8fHwxNzU2ODc3NDYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Woman working remotely with laptop"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}