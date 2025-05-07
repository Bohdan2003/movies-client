import { TPriceData } from "@/utils/types/price";
import { cn } from "@/utils/cn";
import {
  buttonCls,
  defaultBorderCls
} from "@/utils/consts/clsVariable";

export const PricingList: React.FC<{ prices: TPriceData, className?: string }> = ({ prices, className }) => {
  return (<ul className={cn('flex gap-[30px]', className)}>
    {prices.map(price => (
      <li
        className={cn(defaultBorderCls, 'p-[50px] flex-1 rounded-[12px] bg-black-10')}
        key={ price.id }
      >
        <p className="font-bold text-[24px] text-white">{ price.name }</p>
        <p className="mt-[16px]">{ price.description }</p>
        <p className="mt-[50px]">
          <span className="text-white font-semibold text-[40px] mr-[6px]">${price.cost}</span>
          /month
        </p>
        <div className="mt-[50px] flex gap-[20px]">
          <button
            className={cn(defaultBorderCls, 'flex-1 py-[18px] px-[24px] rounded-[8px] bg-black-08 text-white font-semibold cursor-pointer')}
          >Start Free Trial</button>
          <button
            className={cn(buttonCls, 'flex-1')}
          >Choose Plan</button>
        </div>
      </li>
    ))}
  </ul>);
};