import type { NextPage } from 'next';
import {
  Text,
  Button,
  Badge,
  Checkbox,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  Sheet,
  SheetTrigger,
  SheetContent,
  Avatar,
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
            size={'1'}
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
            DropdownMenu
          </Text>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>Dropdown</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem>Item</DropdownMenuItem>
                <DropdownMenuItem>Item</DropdownMenuItem>
                <DropdownMenuItem>Item</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem>Item</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>
                  Item
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Item</DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Choose one</DropdownMenuLabel>
                <DropdownMenuRadioGroup value="one">
                  <DropdownMenuRadioItem value="one">
                    Item
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="two">
                    Item
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="three">
                    Item
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
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
      </div>
    </main>
  );
};

export default Web3ComponentsPage;
