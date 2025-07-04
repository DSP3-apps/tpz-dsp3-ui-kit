'use client';

import { ComponentType } from 'react';

import { LuChevronDown } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';

import { ButtonRendererProps, ItemRendererProps, useDropdownMenu } from './useDropdownMenu';

export type DropdownMenuItem<ItemProps extends object> = ItemRendererProps & {
  label: string;
} & ItemProps;

export type DrowndownMenuButton = ButtonRendererProps;

type DropdownMenuProps<ItemProps extends object> = {
  items: DropdownMenuItem<ItemProps>[];
  containerClassName?: string;
  menuContainerClassName?: string;
  buttonRenderer?: ComponentType<ButtonRendererProps>;
  buttonClassName?: string;
  itemRenderer?: ComponentType<DropdownMenuItem<ItemProps>>;
  itemClassName?: string;
};

const DefaultButton = ({ state: { isOpen }, ...props }: ButtonRendererProps) => {
  return (
    <button
      {...props}
      aria-label="Open Menu"
      className={twMerge(
        `text-black flex gap-2 items-center justify-center border rounded-md border-gray-300 bg-white px-2
        py-1 text-sm shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand`,
        props.className,
      )}
    >
      <span className="text-base pointer-events-none">Menu</span>
      <LuChevronDown className={`pointer-events-none ${isOpen ? 'rotate-180' : ''}`} />
    </button>
  );
};

const DefaultItem = <Item extends object>({ label, ...props }: DropdownMenuItem<Item>) => {
  return (
    <div
      {...props}
      aria-label={label}
      className={twMerge(
        'text-black cursor-pointer hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-300 px-2 py-1',
        props.className,
      )}
    >
      {label}
    </div>
  );
};

export const DropdownMenu = <Item extends object>({
  items,
  containerClassName,
  menuContainerClassName,
  buttonRenderer = DefaultButton,
  buttonClassName,
  itemRenderer = DefaultItem,
  itemClassName,
}: DropdownMenuProps<Item>) => {
  // rebind to avoid linting errors
  const ButtonRenderer = buttonRenderer;
  const ItemRenderer = itemRenderer;

  const { isOpen, buttonProps, itemProps } = useDropdownMenu(items.length);

  return (
    <div className={twMerge('relative', containerClassName)}>
      <ButtonRenderer {...buttonProps} className={buttonClassName} />
      <div
        style={{ display: isOpen ? 'flex' : 'none' }}
        aria-hidden={!isOpen}
        className={twMerge(
          `absolute right-0 mt-1 bg-white border shadow-md rounded-md min-w-full flex-col gap-0 z-[999]
          divide-y divide-slate-400`,
          menuContainerClassName,
        )}
        role="menu"
      >
        {items.map((item, i) => (
          <ItemRenderer
            {...item}
            {...itemProps[i]}
            key={i}
            label={item.label}
            className={itemClassName}
          />
        ))}
      </div>
    </div>
  );
};
