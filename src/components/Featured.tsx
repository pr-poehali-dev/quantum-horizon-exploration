import Icon from '@/components/ui/icon';

const features = [
  {
    icon: "Shield",
    title: "Сквозное шифрование",
    desc: "Все сообщения защищены end-to-end шифрованием. Только вы и собеседник читаете переписку.",
  },
  {
    icon: "Zap",
    title: "Молниеносная скорость",
    desc: "Сообщения доставляются мгновенно в любой точке мира — без задержек и буферизации.",
  },
  {
    icon: "Cloud",
    title: "Облачное хранилище",
    desc: "Вся история чатов синхронизируется между устройствами. Ничего не теряется.",
  },
  {
    icon: "Users",
    title: "Групповые чаты",
    desc: "Создавайте группы до 100 000 участников, каналы и супергруппы для любых задач.",
  },
];

export default function Featured() {
  return (
    <div id="features" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/87657799-6357-42f2-928d-3de0d8776ffd/files/dc7811e4-1c7c-4093-bb3d-461f05e45440.jpg"
          alt="SwiftChat app interface"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-[#2AABEE] font-semibold">Почему выбирают SwiftChat</h3>
        <p className="text-2xl lg:text-4xl mb-10 text-neutral-900 leading-tight font-bold">
          Всё необходимое для общения — в одном приложении
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {features.map((f) => (
            <div key={f.title} className="flex gap-3">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#2AABEE]/10 flex items-center justify-center">
                <Icon name={f.icon} size={18} className="text-[#2AABEE]" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900 mb-1">{f.title}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          href="#download"
          className="bg-[#2AABEE] text-white px-6 py-3 text-sm transition-all duration-300 hover:bg-[#1d8fca] cursor-pointer w-fit uppercase tracking-wide font-semibold"
        >
          Начать бесплатно
        </a>
      </div>
    </div>
  );
}
