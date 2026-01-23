# Low-End Device Testing Guide

## Overview
Testing on low-end devices ensures MEDVBA performs well for all users, regardless of their device capabilities. This guide provides instructions for testing the app on devices with limited resources.

## Target Device Specifications

### Low-End Device Criteria
Test on devices with the following specifications (or use device emulation):

**Android Low-End:**
- CPU: Quad-core 1.2 GHz or lower
- RAM: 2GB or less
- Android Version: 8.0 (API 26) or higher
- Screen: 720p or lower resolution
- Storage: 16GB or less

**iOS Low-End:**
- Device: iPhone 8 or older
- RAM: 2GB or less
- iOS Version: 13.0 or higher
- Storage: 32GB or less

## How to Test

### Option 1: Using Real Devices

#### Recommended Test Devices
1. **Android:**
   - Samsung Galaxy J2 Core
   - Nokia 2.2
   - Moto E6
   - Any device with 2GB RAM

2. **iOS:**
   - iPhone 8
   - iPhone 7
   - iPhone SE (1st gen)

#### Setup
1. Scan the QR code in the Expo development environment
2. Install Expo Go app on the device
3. Launch the app through Expo Go
4. Monitor performance during testing

### Option 2: Using Android Emulator (Low-End Profile)

#### Setup Instructions
1. Open Android Studio
2. Go to AVD Manager (Tools → Device Manager)
3. Create New Virtual Device:
   - **Device:** Pixel 2 or Nexus 5
   - **System Image:** Android 8.0 (API 26) or 9.0 (API 28)
   - **RAM:** 1536 MB or 2048 MB
   - **VM Heap:** 256 MB
   - **Internal Storage:** 2048 MB
   - **CPU Cores:** 2

4. Configure Advanced Settings:
   - Disable "Use Host GPU"
   - Enable "Cold Boot"
   - Set Graphics to "Software - GLES 2.0"

5. Launch emulator with memory constraints:
   ```bash
   emulator -avd Pixel_2_API_26 -memory 2048 -cores 2
   ```

### Option 3: Using iOS Simulator (Limited)
> Note: iOS Simulator runs on Mac hardware and cannot accurately simulate low-end device performance. For iOS testing, use real devices.

If using simulator for basic testing only:
1. Open Xcode
2. Go to Window → Devices and Simulators
3. Select iPhone 8 or iPhone SE (1st gen)
4. Run app through Expo

### Option 4: Chrome DevTools CPU Throttling (Web Testing)

1. Open app in Chrome browser
2. Open DevTools (F12)
3. Click Performance tab
4. Click Settings icon (⚙️)
5. Set CPU throttling to "6x slowdown" or "4x slowdown"
6. Set Network to "Slow 3G" or "Fast 3G"
7. Test the web version

## What to Test

### Critical Flows
Test these user journeys on low-end devices:

#### 1. App Launch & Authentication
- [ ] App launches within 5 seconds
- [ ] Splash screen displays correctly
- [ ] Onboarding screens load smoothly
- [ ] Sign up/Login forms are responsive
- [ ] No crashes during auth flow

**Performance Target:** Complete auth flow in < 10 seconds

#### 2. Quiz Session
- [ ] Quiz loads within 3 seconds
- [ ] Question transitions are smooth (no lag)
- [ ] Image loading doesn't block UI
- [ ] Answer selection is immediate
- [ ] Timer updates smoothly
- [ ] No frame drops during animations
- [ ] Session state saves correctly

**Performance Target:** < 100ms answer selection response time

#### 3. Social Feed
- [ ] Feed loads within 3 seconds
- [ ] Scrolling is smooth (60 FPS target, 30 FPS minimum)
- [ ] Images load progressively
- [ ] Pull-to-refresh works without lag
- [ ] No memory warnings during long scrolls

**Performance Target:** Scroll at 30+ FPS

#### 4. Profile & Stats
- [ ] Profile loads within 2 seconds
- [ ] Charts and graphs render smoothly
- [ ] Settings changes apply immediately
- [ ] No lag when switching tabs

**Performance Target:** Tab switch < 200ms

#### 5. Memory Management
- [ ] No crashes after 30 minutes of use
- [ ] No memory leaks during extended sessions
- [ ] App resumes correctly from background
- [ ] Data persists across app restarts

### Performance Benchmarks

#### Frame Rate
- **Acceptable:** 30 FPS
- **Good:** 45 FPS
- **Excellent:** 60 FPS

#### Load Times
- **App Launch:** < 5 seconds
- **Screen Transition:** < 500ms
- **API Response:** < 3 seconds
- **Image Load:** < 2 seconds

#### Memory Usage
- **Initial Load:** < 100MB
- **After 10 mins:** < 150MB
- **After 30 mins:** < 200MB
- **Maximum:** < 250MB

### Common Issues to Watch For

#### Performance Issues
1. **Slow Animations**
   - Symptom: Choppy or stuttering animations
   - Impact: Poor user experience
   - Fix: Reduce animation complexity or disable on low-end devices

2. **High Memory Usage**
   - Symptom: App crashes or becomes unresponsive
   - Impact: App unusable
   - Fix: Implement memory management, lazy loading

3. **Slow List Rendering**
   - Symptom: Lag when scrolling long lists
   - Impact: Frustrating navigation
   - Fix: Implement virtualization, reduce item complexity

4. **Image Loading Issues**
   - Symptom: Blank screens or slow image appearance
   - Impact: Poor visual experience
   - Fix: Implement progressive loading, optimize image sizes

5. **Battery Drain**
   - Symptom: Device gets hot, battery depletes quickly
   - Impact: User stops using app
   - Fix: Reduce background operations, optimize animations

## Testing Checklist

### Pre-Test Setup
- [ ] Clear app data and cache
- [ ] Enable performance monitoring
- [ ] Set up screen recording
- [ ] Note device specifications

### During Testing
- [ ] Monitor CPU usage
- [ ] Monitor memory usage
- [ ] Check network requests
- [ ] Note any frame drops
- [ ] Record any crashes
- [ ] Take screenshots of issues

### Post-Test Review
- [ ] Document all issues found
- [ ] Categorize by severity (P0, P1, P2)
- [ ] Measure actual performance metrics
- [ ] Compare against benchmarks
- [ ] Create bug reports for blockers

## Performance Monitoring Tools

### React Native Performance Monitor
Enable in-app by shaking device and selecting "Show Perf Monitor"
- RAM: Current memory usage
- JSC: JavaScript thread usage
- Views: Number of views in hierarchy
- UI: Native UI thread usage

### Expo Development Tools
Monitor performance in Expo development console:
```bash
npm start
# Then press 'm' to open development menu on device
# Select "Show Performance Monitor"
```

### Android Studio Profiler
1. Connect device via USB
2. Open Android Studio
3. Go to View → Tool Windows → Profiler
4. Monitor CPU, Memory, Network, Energy

### Xcode Instruments (iOS)
1. Connect device via USB
2. Open Xcode
3. Go to Xcode → Open Developer Tool → Instruments
4. Select "Time Profiler" or "Allocations"
5. Run app and monitor

## Reporting Issues

When reporting performance issues, include:

### Issue Template
```markdown
**Device:** [Device model and specs]
**OS Version:** [Android X.X or iOS X.X]
**App Version:** [Version number]
**Issue:** [Brief description]

**Steps to Reproduce:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Expected Behavior:**
[What should happen]

**Actual Behavior:**
[What actually happens]

**Performance Metrics:**
- Load Time: [X seconds]
- FPS: [X fps]
- Memory: [X MB]

**Screenshots/Video:**
[Attach if possible]

**Severity:**
- [ ] P0 - Blocker (app crashes or unusable)
- [ ] P1 - Critical (major feature broken)
- [ ] P2 - High (minor feature broken or very slow)
- [ ] P3 - Medium (cosmetic or slight slowdown)
```

## Performance Optimization Tips

### For Developers
1. **Use FlatList/SectionList** for long lists instead of ScrollView
2. **Implement image caching** with expo-image
3. **Lazy load** screens and components
4. **Reduce re-renders** with React.memo and useMemo
5. **Optimize images** before including in app
6. **Use native driver** for animations where possible
7. **Avoid inline functions** in render methods
8. **Profile regularly** during development

### Quick Wins
- Reduce animation duration on low-end devices
- Implement placeholder UI while loading
- Optimize AsyncStorage reads/writes
- Reduce initial bundle size
- Enable Hermes engine (Android)

## Testing Schedule

### Before Each Release
- [ ] Test on at least 2 low-end Android devices
- [ ] Test on at least 1 older iPhone (if available)
- [ ] Run performance profiler on critical flows
- [ ] Check memory usage over 30-minute session
- [ ] Verify all tests pass

### Continuous Testing
- Test weekly on low-end device during active development
- Monitor crash reports from low-end devices in Sentry
- Collect user feedback about performance

## Success Criteria

App is ready for launch when:
- ✅ No P0 or P1 bugs on low-end devices
- ✅ All critical flows work within performance targets
- ✅ No crashes during 30-minute test session
- ✅ Memory usage stays below 250MB
- ✅ Scrolling maintains 30+ FPS
- ✅ App launches in under 5 seconds

## Additional Resources

- [React Native Performance](https://reactnative.dev/docs/performance)
- [Expo Performance](https://docs.expo.dev/guides/performance/)
- [Android Performance Best Practices](https://developer.android.com/topic/performance)
- [iOS Performance Guidelines](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/PerformanceOverview/)
