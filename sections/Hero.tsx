import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "site/components/ui/Icon.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

/**
 * @title {{{metric}}} {{{text}}}
 */
export interface Metric {
  metric?: string;
  text: string;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  description?: string;
  image?: ImageWidget;
  placement?: "left" | "right";
  metrics?: Metric[];
  cta?: CTA;
}

export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
  description,
  cta,
  metrics,
}: Props) {
  console.log(metrics);
  return (
    <div class="relative flex bg-success text-base flex-col gap-8 py-8 px-2 md:px-4 items-center mx-auto">
      <div
        class="max-w-[600px] font-bold inline-block text-white text-center leading-[100%] lg:text-4xl text-4xl"
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      ></div>
      {description && (
        <p class="leading-[150%] md:text-md text-lg">{description}</p>
      )}
      <div class="flex gap-4">
        {metrics &&
          metrics.map((metric: Metric) => (
            <div class="bg-[#111111] p-4 flex flex-col items-center text-white">
              <span class="font-bold text-2xl">{metric.metric}</span>
              <span class="text-center">{metric.text}</span>
            </div>
          ))}
      </div>
      {cta && (
        <div class="flex gap-3 items-center">
          <a
            key={cta?.id}
            id={cta?.id}
            href={cta?.href}
            target={cta?.href.includes("http") ? "_blank" : "_self"}
            class={`rounded-lg font-bold text-lg btn btn-primary ${
              cta.outline && "btn-outline"
            }`}
          >
            {cta?.text}
          </a>
        </div>
      )}

      <Icon class="hidden md:block absolute left-0 rotate-90" id="white-cat" height={48} width={32} />
    </div>
  );
}
