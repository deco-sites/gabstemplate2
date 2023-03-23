import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Container from "$store/components/ui/Container.tsx";

export interface Feature {
  /**
   * @description Image src
   */
  icon: {
    name: AvailableIcons;
    width: number;
    height: number;
  };
  /**
   * @description Title
   */
  title: string;
  /**
   * @description Description and Image alt text
   */
  description: string;
}

export interface Props {
  features: Feature[];
}

function FeatureHighlights(
  { features }: Props,
) {
  return (
    <div class="w-full max-w-full bg-footer">
    <Container class="h-[196px] p-6 sm:px-0 sm:py-10 flex items-center">
      <div class="">
        <div class="flex flex-col items-center justify-between sm:flex-row">
          {features.map(({ icon, title, description }) => (
            <div class="flex flex-row items-center gap-4">
              <Icon
                id={icon?.name}
                width={icon?.width}
                height={icon?.height}
                strokeWidth={2}
              />
              <div class="flex flex-col gap-2">
                <Text class="max-w-[80%] text-[16px] text-white font-semibold">{title}</Text>
                <Text class="max-w-[80%] text-[19px] text-white font-normal">
                  {description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
    </div>
  );
}

export default FeatureHighlights;
