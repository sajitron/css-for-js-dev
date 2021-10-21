import styled from 'styled-components/macro';

const BreadCrumbs = () => {
  const BCrumbs = ({ children }: any) => {
    return (
      <nav aria-label="Breadcrumb">
        <BreadCrumbList>{children}</BreadCrumbList>
      </nav>
    );
  };

  const Crumb = ({
    href,
    isCurrentPage,
    children
  }: {
    href: string;
    isCurrentPage?: boolean;
    children: any;
  }) => {
    return (
      <CrumbWrapper>
        <CrumbLink
          href={href}
          aria-current={isCurrentPage ? 'page' : undefined}
        >
          {children}
        </CrumbLink>
      </CrumbWrapper>
    );
  };

  const BreadCrumbList = styled.ol`
    padding: 0;
    margin: 0;
    list-style-type: none;
  `;

  const CrumbWrapper = styled.li`
    display: inline;
    --spacing: 12px;

    &:not(:first-of-type) {
      margin-left: var(--spacing);

      &::before {
        content: '/';
        opacity: 0.25;
        margin-right: var(--spacing);
      }
    }
  `;

  const CrumbLink = styled.a`
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: revert;
    }
  `;

  return (
    <BCrumbs>
      <Crumb href="/">Home</Crumb>
      <Crumb href="/living">Living Room</Crumb>
      <Crumb href="/living/couch">Couches</Crumb>
      <Crumb href="/living/couch/sectional" isCurrentPage={true}>
        Sectionals
      </Crumb>
    </BCrumbs>
  );
};

export default BreadCrumbs;
