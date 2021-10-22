import styled from 'styled-components/macro';

const Quotes = () => {
  const Quote = ({
    by,
    source,
    children
  }: {
    by: string;
    source: string;
    children: any;
  }) => {
    return (
      <figure>
        <QuoteContent>{children}</QuoteContent>
        <figcaption>
          <Author>
            <SourceLink href={source}>{by}</SourceLink>
          </Author>
        </figcaption>
      </figure>
    );
  };

  const QuoteContent = styled.blockquote`
    margin: 0;
    background: hsl(0deg 0% 90%);
    padding: 16px 20px;
    border-radius: 8px;
    font-style: italic;

    &::before {
      content: '"';
    }

    &::after {
      content: '"';
    }
  `;

  /**
   * We want TextLink to be black and underlined when it's
   * inside a Quote Component
   */
  const TextLink = styled.a`
    color: blue;
    text-decoration: none;

    /**
      this way, TextLink within a Quote has the black color 
      and is underlined
    */
    ${QuoteContent} & {
      color: black;
      text-decoration: revert;
    }
  `;

  const Author = styled.cite`
    display: block;
    text-align: right;
    margin-top: 8px;
  `;

  const SourceLink = styled.a`
    text-decoration: none;
    color: hsl(0deg 0% 35%);

    &::before {
      content: '—';
    }
  `;

  return (
    <>
      <Quote by="Unknown" source="/">
        This quote <TextLink href="/">contains a link</TextLink>!
      </Quote>
      <p>
        This paragraph <TextLink href="/">contains a link</TextLink>!
      </p>
    </>
  );
};

export default Quotes;
