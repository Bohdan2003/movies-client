export const SectionHeader: React.FC<{
  title: string,
  subTitle?:string,
  className?: string
}> = ({title, subTitle, className}) => (
  <div className={className}>
    <h2 className="font-bold text-[38px] text-white">{title}</h2>
    { subTitle && <p className="mt-[14px]">{subTitle}</p> }
  </div>
);