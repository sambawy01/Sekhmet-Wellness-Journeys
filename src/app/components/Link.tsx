import React, { forwardRef } from 'react';
import { useHref, useLinkClickHandler } from 'react-router-dom';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  replace?: boolean;
  state?: any;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, replace, state, className, onClick, children, ...props }, ref) => {
    const href = useHref(to);
    const internalOnClick = useLinkClickHandler(to, { replace, state, target: props.target });

    function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
      if (onClick) onClick(event);
      if (!event.defaultPrevented) {
        internalOnClick(event);
      }
    }

    return (
      <a
        {...props}
        ref={ref}
        href={href}
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = 'Link';
