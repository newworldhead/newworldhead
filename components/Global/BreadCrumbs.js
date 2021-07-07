import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const convertBreadcrumb = string => {
    return string
        .replace(/-/g, ' ')
        .replace(/oe/g, 'ö')
        .replace(/ae/g, 'ä')
        .replace(/ue/g, 'ü');
};

const Breadcrumbs = ({ term }) => {
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState(null);

    useEffect(() => {
        if (router) {
            const linkPath = router.asPath.split('/');
            linkPath.shift();

            const pathArray = linkPath.map((path, i) => {
                return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
            });

            setBreadcrumbs(pathArray);
        }
    }, [router]);

    if (!breadcrumbs) {
        return null;
    }
    return (
        <nav aria-label="breadcrumbs">
            <ol className="flex flex-row text-white capitalize text-base md:text-xl tracking-wide">
                <li>
                    <Link href="/">
                        <a className="hover:text-blue-400">home</a>
                    </Link>
                </li>
                {breadcrumbs.map((breadcrumb, i) => {
                    return (
                        <li key={breadcrumb.href} className="flex flex-row">
                            <p className="px-2">/</p>
                            <Link href={breadcrumb.href}>
                                <a aria-current={`${i === (breadcrumbs.length - 1) && 'page'}`} className={`${i === (breadcrumbs.length - 1) ? 'cursor-default' : 'hover:text-blue-400'}`}>
                                    {term && i === (breadcrumbs.length - 1) ? term : convertBreadcrumb(breadcrumb.breadcrumb)}
                                </a>
                            </Link>

                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;