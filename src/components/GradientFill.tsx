import {LinearGradient} from 'expo-linear-gradient'

import {atoms as a, tokens} from '#/alf'

export function GradientFill({
  gradient,
}: {
  gradient:
    | typeof tokens.gradients.sky
    | typeof tokens.gradients.midnight
    | typeof tokens.gradients.sunrise
    | typeof tokens.gradients.sunset
    | typeof tokens.gradients.bonfire
    | typeof tokens.gradients.summer
    | typeof tokens.gradients.nordic
}) {
  return (
    <LinearGradient
      colors={gradient.values.map(c => c[1])}
      locations={gradient.values.map(c => c[0])}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={[a.absolute, a.inset_0]}
    />
  )
}
