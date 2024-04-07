import { AnimatedGradient } from "@/components/AnimatedGradient";
import { useColorScheme } from "nativewind";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Page() {
  return (
    <View className="flex flex-1">
      <AnimatedGradient
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      />
      <View className="p-2">
        <View className="bg-white dark:bg-[black] h-full rounded-xl">
          <Content />
        </View>
      </View>
    </View>
  );
}

function Content() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const { top } = useSafeAreaInsets();
  return (
    <View className="flex-1" style={{ paddingTop: top }}>
      <View className="py-12 md:py-24 lg:py-32 xl:py-48">
        <View className="px-4 md:px-6">
          <View className="flex flex-col items-center gap-4 text-center">
            <Text
              role="heading"
              className="text-3xl text-center native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-black dark:text-yellow-500"
            >
              Where are my design files Keven!
            </Text>
            <Text className="mx-auto max-w-[700px] text-lg text-center text-gray-500 md:text-xl dark:text-gray-400">
              Discover and collaborate on amce. Explore our services now.
            </Text>

            <View className="gap-4">
              <Text
                suppressHighlighting
                className="flex h-9 items-center justify-center overflow-hidden rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 web:shadow ios:shadow transition-colors hover:bg-gray-900/90 active:bg-gray-400/90 web:focus-visible:outline-none web:focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                onPress={() =>
                  setColorScheme(colorScheme === "dark" ? "light" : "dark")
                }
              >
                Change to {colorScheme === "dark" ? "light" : "dark"} mode
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
