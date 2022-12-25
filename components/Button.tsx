import React from "react";
import { Box, Button } from "native-base";


export default ({ ref, onPress, text, onLayout, accessibilityLabel, style }: { ref: any, onPress: any, text: any, onLayout: any, accessibilityLabel: any, style: any }) => {

  return <Button accessibilityLabel={accessibilityLabel} style={style} onLayout={onLayout} ref={ref} onPress={onPress}>{text}</Button>;
};