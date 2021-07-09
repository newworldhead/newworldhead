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

const Breadcrumbs = ({ term, force }) => {
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

                {/* need to find a better way */}
                {force && (
                    <>
                        <p className="px-2">/</p>
                        <li>
                            <Link href="/articles">
                                <a className="hover:text-blue-400">{force}</a>
                            </Link>
                        </li>
                        <p className="px-2">/</p>
                    </>
                )}

                {breadcrumbs.map((breadcrumb, i) => {
                    return (
                        <li key={breadcrumb.href} className="flex flex-row">
                            {!force && (
                                <p className="px-2">/</p>
                            )}
                            <Link href={breadcrumb.href}>
                                <a
                                    aria-current={`${i === (breadcrumbs.length - 1) && 'page'}`}
                                    className={`${i === (breadcrumbs.length - 1) ? 'cursor-default' : 'hover:text-blue-400'}`}>
                                    {
                                        (term && i === (breadcrumbs.length - 1))
                                            ? term
                                            : force && i === 0
                                                ? ''
                                                : convertBreadcrumb(breadcrumb.breadcrumb)
                                    }
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