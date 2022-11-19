
const Footer = () => (
    <div class="text-center py-2 bg-gray-800 text-gray-200">
        <a
            href="https://github.com/yeikiu/fresh-deno-delowcos"
            target="_blank"
            class="text-reset"
        >
            delowcos.com v1.0.0
        </a>
        <p>
            Created with ❤️ by <a
                href="https://github.com/yeikiu/"
                target="_blank"
                class="text-reset"
            >JQ</a> © {new Date().toDateString().slice(-4)}
        </p>
    </div>
);

export default Footer;
