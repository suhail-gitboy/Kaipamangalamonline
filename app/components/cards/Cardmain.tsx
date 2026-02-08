type ServiceCardProps = {
    icon: string
    title: string
    subtitle: string
    action: string
    iconBg: string
}

const ServiceCard = ({
    icon,
    title,
    subtitle,
    action,
    iconBg,
}: ServiceCardProps) => {
    return (
        <div
            className="
    flex sm:flex-col lg:flex-row items-center justify-between
    rounded-2xl bg-white p-4
    border border-slate-200 shadow-sm
    hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200
    w-full
  "
        >
            {/* Left */}
            <div className="flex items-center gap-3">
                <div
                    className={`
        flex h-10 w-10 items-center justify-center
        rounded-full text-lg font-bold text-white
        shadow-md
        ${iconBg} 
      `}
                >
                    {icon}
                </div>

                <div className="flex flex-col">
                    <h3 className="text-xs font-semibold text-slate-900">{title}</h3>
                    <p className="text-[10px] text-xs text-slate-500">{subtitle}</p>
                </div>
            </div>

            {/* Right */}
            <button
                className="
      rounded-full bg-gradient-to-br from-slate-900 to-slate-700
      hover:from-slate-700 hover:to-slate-500
      text-[10px] font-semibold text-white
      px-3 py-1.5 shadow-md
      transition-all duration-200
    "
            >
                {action}
            </button>
        </div>

    )
}


export default ServiceCard;