# MEDVBA UI – Cross-platform native components

Strat de abstracție peste **@expo/ui**:

- **iOS**: `@expo/ui/swift-ui` (SwiftUI), cu `Host` ca container
- **Android**: `@expo/ui/jetpack-compose` (Jetpack Compose)
- **Web / fallback**: `react-native-paper`

## Componente

- **UIButton** – buton nativ (SwiftUI / Compose / Paper)
- **UITextField** – câmp text (SwiftUI TextField/SecureField / Compose TextInput / Paper TextInput)

## Utilizare

```tsx
import { UIButton, UITextField } from '@/ui';

<UIButton variant="borderedProminent" onPress={handleSave}>Save</UIButton>
<UITextField value={email} onChangeText={setEmail} placeholder="Email" keyboardType="email-address" />
```

## Cerințe

- **@expo/ui** nu rulează în Expo Go. Pentru iOS/Android cu SwiftUI/Compose folosește **development builds** (`eas build --profile development` sau `npx expo run:ios` / `npx expo run:android`).
- Pe web (sau când native UI nu e disponibil) se folosește automat react-native-paper.
