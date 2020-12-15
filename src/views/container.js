const container =
    `
<div class="container">
    {{it.header | safe}}
    {{it.contentTop | safe}}
    {{it.contentBottom | safe}}
</div>
`;

export { container };