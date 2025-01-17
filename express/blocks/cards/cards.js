/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

// eslint-disable-next-line import/no-unresolved
import { createTag } from '../../scripts/scripts.js?ccx';

export default function decorate($block) {
  $block.querySelectorAll(':scope>div').forEach(($card) => {
    $card.classList.add('card');
    const $cardDivs = [...$card.children];
    $cardDivs.forEach(($div) => {
      if ($div.querySelector('img')) {
        $div.classList.add('card-image');
      } else {
        $div.classList.add('card-content');
      }
      const $a = $div.querySelector('a');
      if ($a && $a.textContent.startsWith('https://')) {
        const $wrapper = createTag('a', { href: $a.href, class: 'card' });
        $a.remove();
        $wrapper.innerHTML = $card.innerHTML;
        $block.replaceChild($wrapper, $card);
      }
    });
  });
}
