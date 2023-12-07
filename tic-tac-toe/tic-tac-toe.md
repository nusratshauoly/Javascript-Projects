<!-- css color code website -->
https://coolors.co/d8d4f2-d6d0ec-d3cce5-cec3d7-c4b2bc-a29587-846c5b-332e3c


Task list:

1. There are 9 boxes and we will count this from 0 to 8.
2. There will be 2 players , player0 & player1
3. Any of two player would choose 0 or X for play 
4. It will switch turn of players after every move, at first (player0) will play then (player1) will play, then switch to (player0) again.
5. one of players win who will first match the same line of 0 or 1, the orientation of winner player can be horizontal or vertical or diagonal.
6. Winning pattern : 8 patterns
    horizontal pattern:
            0, 1, 2
            3, 4, 5
            6, 7, 8
    vertical pattern:  
            0, 3, 6
            1, 4, 7
            2, 5, 8
    diagonal pattern:
            0, 4, 8
            2, 4, 6


7. when 1 player win disable the button
8. when 1 player win show the winner message

9. Important practice problem
- Implement the logic for 'Draw' condition. You have to track when the game has no winner. In this case, print a different message in the msg

- Hint - Use a new variable count, which counts button clicks. When the total count reaches 9 but Game has no winners, that means the Game was a Draw.