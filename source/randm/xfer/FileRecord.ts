/*
  fTelnet: An HTML5 WebSocket client
  Copyright (C) 2009-2013  Rick Parrish, R&M Software

  This file is part of fTelnet.

  fTelnet is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  any later version.

  fTelnet is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with fTelnet.  If not, see <http://www.gnu.org/licenses/>.
*/
class FileRecord {
    private _Data: ByteArray = new ByteArray();
    private _Name: string = '';
    private _Size: number = 0;

    constructor(name: string, size: number) {
        this._Name = name;
        this._Size = size;
    }

    public get data(): ByteArray {
        return this._Data;
    }

    public get name(): string {
        return this._Name;
    }

    public get size(): number {
        return this._Size;
    }
}
