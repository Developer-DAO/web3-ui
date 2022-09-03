import type { NextPage } from 'next';
import {
  Text,
  Button,
  Badge,
  Checkbox,
  Dropdown,
  Sheet,
  SheetTrigger,
  SheetContent,
  Avatar,
  TextField,
  Card,
} from '@web3-ui/components/src';

const Web3ComponentsPage: NextPage = () => {
  return (
    <main>
      <div className={`section`}>
        <Text size={`xl`} as={`h3`} weight={'bold'} css={{ padding: '$2' }}>
          Elements
        </Text>

        {/* Avatar Element */}
        <div className={`item`}>
          <Text
            size={`lg`}
            as={`p`}
            weight={'semibold'}
            css={{ padding: '$4' }}
          >
            Avatar
          </Text>
          <Avatar
            size={'md'}
            shape={'circle'}
            src={'https://www.developerdao.com/D_D_logo-light.svg'}
          />
        </div>

        {/* Button Element */}
        <div className={`item`}>
          <Text
            size={`lg`}
            as={`p`}
            weight={'semibold'}
            css={{ padding: '$4' }}
          >
            Button
          </Text>
          <Button size={'md'}>testing</Button>
        </div>

        {/* Badge Element */}
        <div className={`item`}>
          <Text
            size={`lg`}
            as={`p`}
            weight={'semibold'}
            css={{ padding: '$4' }}
          >
            Badge
          </Text>
          <Badge variant="blue">testing</Badge>
        </div>

        {/* Checkbox Element */}
        <div className={`item`}>
          <Text
            size={`lg`}
            as={`p`}
            weight={'semibold'}
            css={{ padding: '$4' }}
          >
            Checkbox
          </Text>
          <Checkbox size="2" defaultChecked />
        </div>

        {/* Dropdown Element */}
        <div className={`item`}>
          <Text
            size={`lg`}
            as={`p`}
            weight={'semibold'}
            css={{ padding: '$4' }}
          >
            Dropdown
          </Text>

          <Dropdown
            label={`Test label`}
            placeHolder={`Test placeHolder`}
            items={['Item 1', 'Item 2', 'Item 3']}
            onSelect={(value) => {
              console.log(value);
            }}
          />
        </div>

        {/* Sheet Element */}
        <div className={`item`}>
          <Text
            size={`lg`}
            as={`p`}
            weight={'semibold'}
            css={{ padding: '$4' }}
          >
            Sheet
          </Text>
          <Sheet>
            <SheetTrigger asChild>
              <Button>Open Left</Button>
            </SheetTrigger>
            <SheetContent side="left"></SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <Button>Open Right</Button>
            </SheetTrigger>
            <SheetContent side="right"></SheetContent>
          </Sheet>
        </div>

        {/* TextField Element */}
        <div className={`item`}>
          <Text
            size={`lg`}
            as={`p`}
            weight={'semibold'}
            css={{ padding: '$4' }}
          >
            TextField
          </Text>
          <TextField placeholder="placeholder" />
        </div>

        {/* Card Element */}
        <div className={`item`}>
          <Text
            size={`lg`}
            as={`p`}
            weight={'semibold'}
            css={{ padding: '$4' }}
          >
            Card
          </Text>
          <Card> This is a Card </Card>
        </div>
      </div>
    </main>
  );
};

export default Web3ComponentsPage;
