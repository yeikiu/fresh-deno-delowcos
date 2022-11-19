import { asset } from "$fresh/runtime.ts";
import { type ComponentChildren } from "preact";

type HeroBackgroundProps = {
    children?: ComponentChildren,
    bgImgUrl: string,
}

const HeroBackground = ({ bgImgUrl, children = null }: HeroBackgroundProps) => {
    return (
        <div style={`background: url("${asset(bgImgUrl)}"); background-size: cover;`}>
            <div class="h-screen semitransparent-overlay relative">
                {children}
            </div>
        </div>
    );
}

export default HeroBackground;
