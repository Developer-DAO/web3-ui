import { Box, Text, Grid, Container } from '@web3-ui/components';

export const ColorPalette = () => {
  return (
    <div className={`section darkTheme`}>
      <Text size={`xl`} as={`h3`} weight={'bold'} css={{ padding: '$2' }}>
        Colors
      </Text>
      <div className={`item`}>
        <h3 className={`item-title`}></h3>
        <Container size="3">
          <Grid
            css={{
              gridTemplateColumns: 'repeat(11, minmax(0, 1fr))',
              gap: 2,
              ai: 'center',
            }}
          >
            <Box></Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text>50</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text>100</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text>200</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text>300</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text>400</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text>500</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text>600</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text>700</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text>800</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text>900</Text>
            </Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>$primary</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$primary50' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$primary100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$primary200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$primary300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$primary400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$primary500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$primary600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$primary700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$primary800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$primary900' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>
                $secondary
              </Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$secondary50' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$secondary100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$secondary200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$secondary300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$secondary400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$secondary500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$secondary600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$secondary700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$secondary800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$secondary900' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>$success</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$success50' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$success100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$success200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$success300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$success400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$success500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$success600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$success700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$success800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$success900' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>$info</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$info50' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$info100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$info200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$info300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$info400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$info500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$info600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$info700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$info800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$info900' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>$warning</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$warning50' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$warning100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$warning200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$warning300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$warning400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$warning500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$warning600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$warning700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$warning800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$warning900' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>$danger</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$danger50' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$danger100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$danger200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$danger300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$danger400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$danger500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$danger600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$danger700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$danger800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$danger900' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>$neutral</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$neutral50' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$neutral100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$neutral200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$neutral300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$neutral400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$neutral500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$neutral600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$neutral700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$neutral800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$neutral900' }}></Box>

            <Box css={{ height: 35 }}></Box>
            <Box css={{ height: 35 }}></Box>
            <Box css={{ height: 35 }}></Box>
            <Box css={{ height: 35 }}></Box>
            <Box css={{ height: 35 }}></Box>
            <Box css={{ height: 35 }}></Box>
            <Box css={{ height: 35 }}></Box>
            <Box css={{ height: 35 }}></Box>
            <Box css={{ height: 35 }}></Box>
            <Box css={{ height: 35 }}></Box>
            <Box css={{ height: 35 }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>$blue</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$blue50' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue900' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>$cyan</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$cyan50' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$cyan100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$cyan200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$cyan300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$cyan400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$cyan500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$cyan600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$cyan700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$cyan800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$cyan900' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>$green</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$green50' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green900' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>$red</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$red50' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red900' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>$pink</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$pink50' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink900' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>$purple</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$purple50' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple900' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>$orange</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$orange50' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange900' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>$yellow</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$yellow50' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$yellow100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$yellow200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$yellow300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$yellow400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$yellow500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$yellow600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$yellow700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$yellow800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$yellow900' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>$gray</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$gray50' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray900' }}></Box>
          </Grid>
        </Container>
      </div>
    </div>
  );
};
