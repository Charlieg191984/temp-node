export function parseSwiperBuildModulesEnv() {
  if (process.env.SWIPER_BUILD_MODULES) {
    const buildModules = process.env.SWIPER_BUILD_MODULES.split(
      /[,\s]+/
    ).filter(
      (moduleName) => moduleName // ensure to empty will be removed
    );
    if (buildModules.length) return buildModules;
  }
  return null;
}
