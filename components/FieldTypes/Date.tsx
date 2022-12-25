import { View } from 'native-base'
import * as React from 'react'
import { Button, TextInput, TouchableRipple } from 'react-native-paper'
import { DatePickerModal } from 'react-native-paper-dates'

export default ({ label, value, onChange }: { label: any, value: any, onChange: any }) => {

  const [open, setOpen] = React.useState(false)

  const onDismissSingle = React.useCallback(() => {
    setOpen(false)
  }, [setOpen])

  const onConfirmSingle = React.useCallback(
    (params: any) => {
      setOpen(false)
      onChange && onChange(params.date)
    },
    [setOpen, onChange]
  )

  let _value = value
  if (!(_value instanceof Date)) {
    _value = undefined
  }


  return (
    <>

      <TouchableRipple
        onPress={() => setOpen(true)}
      >
        <View pointerEvents={"none"}>
          <TextInput
            value={_value?.toLocaleDateString("en-US")}
            mode={'outlined'}
            label={label}
            pointerEvents={"none"}
          />
        </View>
      </TouchableRipple>

      <DatePickerModal
        locale="en"
        mode="single"
        visible={open}
        onDismiss={onDismissSingle}
        date={_value}
        onConfirm={onConfirmSingle}
      // validRange={{
      //   startDate: new Date(2021, 1, 2),  // optional
      //   endDate: new Date(), // optional
      //   disabledDates: [new Date()] // optional
      // }}
      // onChange={} // same props as onConfirm but triggered without confirmed by user
      // saveLabel="Save" // optional
      // saveLabelDisabled={true} // optional, default is false
      // uppercase={false} // optional, default is true
      // label="Select date" // optional
      // animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
      // startYear={2000} // optional, default is 1800
      // endYear={2100} // optional, default is 2200
      />
    </>
  )
}