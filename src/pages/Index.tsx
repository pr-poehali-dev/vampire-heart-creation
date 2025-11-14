import { useState } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const gallery = [
    {
      id: 1,
      url: 'https://cdn.poehali.dev/projects/01747b4f-e20d-41a7-8c9b-3a92f79dd185/files/147e7d6f-21f1-42a7-9137-e87dbaa7934a.jpg',
      title: 'Королева Тьмы',
      description: 'Вампирская аристократка в роскошном корсете с цветочным орнаментом'
    }
  ];

  return (
    <div className="min-h-screen bg-gothic-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gothic-burgundy/10 via-transparent to-transparent" />
      
      <div className="candle-flicker absolute top-20 left-10 w-2 h-2 bg-secondary rounded-full blur-sm" />
      <div className="candle-flicker absolute top-40 right-20 w-2 h-2 bg-secondary rounded-full blur-sm" style={{ animationDelay: '1s' }} />
      <div className="candle-flicker absolute bottom-40 left-20 w-2 h-2 bg-secondary rounded-full blur-sm" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <header className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Moon" size={40} className="text-secondary" />
            <h1 className="text-6xl font-bold gothic-shadow text-foreground">
              Ночная Галерея
            </h1>
            <Icon name="Moon" size={40} className="text-secondary" />
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Добро пожаловать в мир вечной ночи, где красота соседствует с тьмой
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {gallery.map((item, index) => (
            <Card
              key={item.id}
              className="bg-card/80 backdrop-blur border-border overflow-hidden hover:border-accent transition-all duration-500 cursor-pointer animate-scale-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedImage(item.url)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gothic-darker via-gothic-darker/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-6 border-t border-border/50">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="Sparkles" size={20} className="text-accent" />
                  <h3 className="text-2xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/50 backdrop-blur border border-border rounded-full">
            <Icon name="Wine" size={24} className="text-accent" />
            <span className="text-muted-foreground italic">
              В бокале — кровь столетий, в сердце — вечность
            </span>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-foreground hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-[90vh] object-contain animate-scale-in"
          />
        </div>
      )}

      <footer className="relative z-10 text-center py-8 mt-16 border-t border-border/30">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Icon name="Skull" size={20} className="text-accent" />
          <p className="text-sm">
            Создано в тени полуночной луны
          </p>
          <Icon name="Skull" size={20} className="text-accent" />
        </div>
      </footer>
    </div>
  );
}