import Link from 'next/link';

export default function NavItem({
    navItemLabel, navItemIcon, navLink
}: {

    navItemLabel: string;
    navItemIcon: string;
    navLink: string;
}) {
    return <Link href={navLink}> <div role="button"
        className="flex flex-nowrap  w-full  p-4 m-2  transition-all rounded-lg 
    outline-none justify-items-start

     hover:bg-sky-700 hover:text-white hover:fill-white">

        <img className="h-6 w-6 object-contain" src={navItemIcon} />
        <div className='w-6' />
        <p className="block text-l font-semibold">{navItemLabel}</p>

    </div> </Link>
}
