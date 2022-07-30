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
} from '@web3-ui/components/src';

const Web3ComponentsPage: NextPage = () => {
  return (
    <main>
      <div className={`section`}>
        <Text size={`xl`} as={`h3`} weight={'bold'} css={{ padding: '$2' }}>
          Elements
        </Text>
        <div className={`item`}>
          <Text
            size={`lg`}
            as={`p`}
            weight={'semibold'}
            css={{ padding: '$4' }}
          >
            Button
          </Text>
          <Button>testing</Button>
        </div>
        <div className={`item`}>
          <Text
            size={`lg`}
            as={`p`}
            weight={'semibold'}
            css={{ padding: '$4' }}
          >
            Badge
          </Text>
          <Badge variant="lime">testing</Badge>
        </div>

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
      </div>
    </main>
  );
};

export default Web3ComponentsPage;
