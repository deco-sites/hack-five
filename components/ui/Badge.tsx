interface Props {
    children: any;
}

const PurpleBadge = ({ children }: Props) => (
    <span class="whitespace-nowrap inline-flex items-center rounded-3xl px-3.5 py-1.5 text-sm font-bold text-[#9747FF] ring-2 ring-inset ring-[#9747FF] w-fit">
        {children}
    </span>
);

const OrangeBadge = ({ children }: Props) => (
    <span class="whitespace-nowrap inline-flex items-center rounded-3xl px-3.5 py-1.5 text-sm font-bold text-orange-700 ring-2 ring-inset ring-orange-700 w-fit">
        {children}
    </span>
);

export { PurpleBadge, OrangeBadge };
