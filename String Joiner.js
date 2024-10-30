// Name: String Joiner
// ID: stringJoiner
// Description: Expanson of the join()() block.
// By: -Clickertale_2- <https://scratch.mit.edu/users/-Clickertale_2-/>
// License: MIT AND MPL-2.0

(function(Scratch) {
  'use strict';

  // Check if the extension is running unsandboxed
  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Audio Waveform Generator must run unsandboxed');
  }

class StringJoinerExtension {
  constructor() {}

  getInfo() {
    return {
      id: 'stringJoiner',
      name: 'String Joiner',
      color1: '#4CAF50', // color1
      color2: '#57C95C', // color2 (15% brighter)
      color3: '#39873C', // color3 (25% darker)
      blocks: [
        {
          opcode: 'join3Strings',
          blockType: Scratch.BlockType.REPORTER,
          text: 'join [STR1][STR2][STR3]',
          arguments: {
            STR1: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '1'
            },
            STR2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '2'
            },
            STR3: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '3'
            }
          }
        },
        {
          opcode: 'join4Strings',
          blockType: Scratch.BlockType.REPORTER,
          text: 'join [STR1][STR2][STR3][STR4]',
          arguments: {
            STR1: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '1'
            },
            STR2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '2'
            },
            STR3: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '3'
            },
            STR4: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '4'
            }
          }
        },
        {
          opcode: 'join5Strings',
          blockType: Scratch.BlockType.REPORTER,
          text: 'join [STR1][STR2][STR3][STR4][STR5]',
          arguments: {
            STR1: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '1'
            },
            STR2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '2'
            },
            STR3: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '3'
            },
            STR4: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '4'
            },
            STR5: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '5'
            }
          }
        },
        {
          opcode: 'join6Strings',
          blockType: Scratch.BlockType.REPORTER,
          text: 'join [STR1][STR2][STR3][STR4][STR5][STR6]',
          arguments: {
            STR1: { type: Scratch.ArgumentType.STRING, defaultValue: '1' },
            STR2: { type: Scratch.ArgumentType.STRING, defaultValue: '2' },
            STR3: { type: Scratch.ArgumentType.STRING, defaultValue: '3' },
            STR4: { type: Scratch.ArgumentType.STRING, defaultValue: '4' },
            STR5: { type: Scratch.ArgumentType.STRING, defaultValue: '5' },
            STR6: { type: Scratch.ArgumentType.STRING, defaultValue: '6' }
          }
        },
        {
          opcode: 'join7Strings',
          blockType: Scratch.BlockType.REPORTER,
          text: 'join [STR1][STR2][STR3][STR4][STR5][STR6][STR7]',
          arguments: {
            STR1: { type: Scratch.ArgumentType.STRING, defaultValue: '1' },
            STR2: { type: Scratch.ArgumentType.STRING, defaultValue: '2' },
            STR3: { type: Scratch.ArgumentType.STRING, defaultValue: '3' },
            STR4: { type: Scratch.ArgumentType.STRING, defaultValue: '4' },
            STR5: { type: Scratch.ArgumentType.STRING, defaultValue: '5' },
            STR6: { type: Scratch.ArgumentType.STRING, defaultValue: '6' },
            STR7: { type: Scratch.ArgumentType.STRING, defaultValue: '7' }
          }
        },
        {
          opcode: 'join8Strings',
          blockType: Scratch.BlockType.REPORTER,
          text: 'join [STR1][STR2][STR3][STR4][STR5][STR6][STR7][STR8]',
          arguments: {
            STR1: { type: Scratch.ArgumentType.STRING, defaultValue: '1' },
            STR2: { type: Scratch.ArgumentType.STRING, defaultValue: '2' },
            STR3: { type: Scratch.ArgumentType.STRING, defaultValue: '3' },
            STR4: { type: Scratch.ArgumentType.STRING, defaultValue: '4' },
            STR5: { type: Scratch.ArgumentType.STRING, defaultValue: '5' },
            STR6: { type: Scratch.ArgumentType.STRING, defaultValue: '6' },
            STR7: { type: Scratch.ArgumentType.STRING, defaultValue: '7' },
            STR8: { type: Scratch.ArgumentType.STRING, defaultValue: '8' }
          }
        },
        {
          opcode: 'join9Strings',
          blockType: Scratch.BlockType.REPORTER,
          text: 'join [STR1][STR2][STR3][STR4][STR5][STR6][STR7][STR8][STR9]',
          arguments: {
            STR1: { type: Scratch.ArgumentType.STRING, defaultValue: '1' },
            STR2: { type: Scratch.ArgumentType.STRING, defaultValue: '2' },
            STR3: { type: Scratch.ArgumentType.STRING, defaultValue: '3' },
            STR4: { type: Scratch.ArgumentType.STRING, defaultValue: '4' },
            STR5: { type: Scratch.ArgumentType.STRING, defaultValue: '5' },
            STR6: { type: Scratch.ArgumentType.STRING, defaultValue: '6' },
            STR7: { type: Scratch.ArgumentType.STRING, defaultValue: '7' },
            STR8: { type: Scratch.ArgumentType.STRING, defaultValue: '8' },
            STR9: { type: Scratch.ArgumentType.STRING, defaultValue: '9' }
          }
        },
        {
          opcode: 'join10Strings',
          blockType: Scratch.BlockType.REPORTER,
          text: 'join [STR1][STR2][STR3][STR4][STR5][STR6][STR7][STR8][STR9][STR10]',
          arguments: {
            STR1: { type: Scratch.ArgumentType.STRING, defaultValue: '1' },
            STR2: { type: Scratch.ArgumentType.STRING, defaultValue: '2' },
            STR3: { type: Scratch.ArgumentType.STRING, defaultValue: '3' },
            STR4: { type: Scratch.ArgumentType.STRING, defaultValue: '4' },
            STR5: { type: Scratch.ArgumentType.STRING, defaultValue: '5' },
            STR6: { type: Scratch.ArgumentType.STRING, defaultValue: '6' },
            STR7: { type: Scratch.ArgumentType.STRING, defaultValue: '7' },
            STR8: { type: Scratch.ArgumentType.STRING, defaultValue: '8' },
            STR9: { type: Scratch.ArgumentType.STRING, defaultValue: '9' },
            STR10: { type: Scratch.ArgumentType.STRING, defaultValue: '10' }
          }
        }
      ],
    };
  }

  join3Strings({ STR1, STR2, STR3 }) {
    return `${STR1}${STR2}${STR3}`;
  }

  join4Strings({ STR1, STR2, STR3, STR4 }) {
    return `${STR1}${STR2}${STR3}${STR4}`;
  }

  join5Strings({ STR1, STR2, STR3, STR4, STR5 }) {
    return `${STR1}${STR2}${STR3}${STR4}${STR5}`;
  }

  join6Strings({ STR1, STR2, STR3, STR4, STR5, STR6 }) {
    return `${STR1}${STR2}${STR3}${STR4}${STR5}${STR6}`;
  }

  join7Strings({ STR1, STR2, STR3, STR4, STR5, STR6, STR7 }) {
    return `${STR1}${STR2}${STR3}${STR4}${STR5}${STR6}${STR7}`;
  }

  join8Strings({ STR1, STR2, STR3, STR4, STR5, STR6, STR7, STR8 }) {
    return `${STR1}${STR2}${STR3}${STR4}${STR5}${STR6}${STR7}${STR8}`;
  }

  join9Strings({ STR1, STR2, STR3, STR4, STR5, STR6, STR7, STR8, STR9 }) {
    return `${STR1}${STR2}${STR3}${STR4}${STR5}${STR6}${STR7}${STR8}${STR9}`;
  }

  join10Strings({ STR1, STR2, STR3, STR4, STR5, STR6, STR7, STR8, STR9, STR10 }) {
    return `${STR1}${STR2}${STR3}${STR4}${STR5}${STR6}${STR7}${STR8}${STR9}${STR10}`;
  }
}

Scratch.extensions.register(new StringJoinerExtension());
})(Scratch);
