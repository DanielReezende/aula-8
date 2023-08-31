
import { Button as ButtoNativeBase, Heading } from 'native-base';

export function Button({ title, ...rest }) {
  return (
    <ButtoNativeBase
      bg="green.500"
      h={14}
      fontSize="sm"
      rounded="sm"
      _pressed={{ bg: "green.500 " }}
      {...rest}
    >
      <Heading color="white" fontSize="sm">{title}</Heading>
    </ButtoNativeBase>
  );
}