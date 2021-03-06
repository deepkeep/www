### [[[icon-get]]] Using a network
We'll use a packaged [torch](http://torch.ch) network that computes xor as an
example. Start by downloading and extracting the network:

```bash
deepkeep install deepkeep/xor
```

Then create a file called `test.lua` and add the following to it:

```lua
require 'torch'
require 'nngraph'

local net = torch.load('deepkeep/xor/network.t7')

print('0 XOR 0 = ' .. net:forward(torch.Tensor({ 0, 0 }))[1])
print('0 XOR 1 = ' .. net:forward(torch.Tensor({ 0, 1 }))[1])
print('1 XOR 0 = ' .. net:forward(torch.Tensor({ 1, 0 }))[1])
print('1 XOR 1 = ' .. net:forward(torch.Tensor({ 1, 1 }))[1])
```

And finally run the program with

```bash
th test.lua
```

If it all goes well you should see something like

```bash
0 XOR 0 = 0.022044937504424
0 XOR 1 = 0.97297107607815
1 XOR 0 = 0.97108330450396
1 XOR 1 = 0.038300505836698
```
